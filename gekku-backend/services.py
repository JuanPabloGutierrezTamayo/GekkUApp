import database as _database, models as _models, schemas as _schemas
import sqlalchemy.orm as _orm
import jwt as _jwt
import fastapi as _fastapi
import fastapi.security as _security

oauth2schema = _security.OAuth2PasswordBearer(tokenUrl="/api/token")
JWT_SECRET = "myjwtsecret"


def create_database():
    return _database.Base.metadata.create_all(bind= _database.engine)


def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def get_student_by_email(email: str, db: _orm.Session):
    return db.query(_models.Student).filter(_models.Student.email == email).first()


async def authenticate_student(email:str, password:str, db: _orm.Session):
    student = await get_student_by_email(db=db, email=email)
    if not student:
        return False
    if not student.verify_password(password):
        return False

    return student


async def create_token(student: _models.Student):
    student_obj = _schemas.Student.from_orm(student)
    token = _jwt.encode(student_obj.dict(), JWT_SECRET)

    return dict(access_token=token, token_type="bearer")


async def get_current_student(db: _orm.Session = _fastapi.Depends(get_db), token:str = _fastapi.Depends(oauth2schema)):
    try:
        payload = _jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        student = db.query(_models.Student).get(payload["id"])
    except:
        raise _fastapi.HTTPException(status_code=401, detail="Invalid Email or Password")
    
    return _schemas.Student.from_orm(student)


async def create_alert(student: _schemas.Student, db: _orm.Session, alert: _schemas.AlertCreate):
    alert = _models.Alert(**alert.dict(), student_id = student.id)
    db.add(alert)
    db.commit()
    db.refresh(alert)
    return _schemas.Alert.from_orm(alert)

# Alerts
## Get all alerts
async def get_all_alerts(student: _schemas.Student, db: _orm.Session):
    alerts = db.query(_models.Alert).filter_by(student_id=student.id)
    return list(map(_schemas.Alert.from_orm, alerts))

## Selector for CRUD
async def alert_selector(alert_id: int, student: _schemas.Student, db: _orm.Session):
    alert = (
        db.query(_models.Alert)
        .filter_by(student_id=student.id)
        .filter(_models.Alert.id == alert_id)
        .first()
    )

    if alert is None:
        raise _fastapi.HTTPException(status_code=404, detail="This alert doesn't exist")

    return alert

## Get a single alert
async def get_alert(alert_id: int, student: _schemas.Student, db: _orm.Session):
    alert = await alert_selector(alert_id=alert_id, student=student, db=db)
    return _schemas.Lead.from_orm(alert)

## Delete a single alert
async def delete_alert(alert_id: int, student: _schemas.Student, db: _orm.Session):
    alert = await alert_selector(alert_id, student, db)
    db.delete(alert)
    db.commit()

## Update an alert
async def update_alert(alert_id: int, alert: _schemas.AlertCreate, student: _schemas.Student, db: _orm.Session):
    alert_db = await alert_selector(alert_id, student, db)

    alert_db.title = alert.title
    alert_db.topic = alert.topic
    alert_db.note = alert.note
    alert_db.date = alert.date

    db.commit()
    db.refresh(alert_db)

    return _schemas.Alert.from_orm(alert_db)

# Career
async def get_career(student: _schemas.Student, db: _orm.Session):
    careers = db.query(_models.Career).filter_by(student_id=student.id)
    return list(map(_schemas.Career.from_orm, careers))

# Academic history
async def get_history(career: _schemas.Career, db: _orm.Session):
    history = db.query(_models.AcademicHistory).filter_by(career_id = career.id).first()
    return _schemas.AcademicHistory.from_orm(history)

# Subject
## Get all subjects
async def get_subjects(history: _schemas.AcademicHistory, db: _orm.Session):
    subjects = db.query(_models.Subject).filter_by(history_id = history.id)
    return list(map(_schemas.Subject.from_orm, subjects))

## Get subject by semester
async def get_semesters(history: _schemas.AcademicHistory, db: _orm.Session):
    query = db.query(_models.Subject.semester.distinct().label("semester")).filter_by(history_id = history.id)
    semesters = [row.semester for row in query.all()]
    return semesters
