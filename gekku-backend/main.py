import fastapi as _fastapi
from fastapi.middleware.cors import CORSMiddleware
import fastapi.security as _security
import sqlalchemy.orm as _orm
import database as _database
import services as _services, schemas as _schemas
from fastapi.responses import JSONResponse
from typing import List

app = _fastapi.FastAPI()

origins = [
    "http://localhost:19006",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Authentication token
@app.post("/api/token")
async def generate_token(form_data: _security.OAuth2PasswordRequestForm = _fastapi.Depends(), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    student = await _services.authenticate_student(form_data.username, form_data.password, db)
    if not student:
        raise _fastapi.HTTPException(status_code=401, detail="Invalid Credentials")

    return await _services.create_token(student)

# Student data
@app.get("/api/students/me", response_model= _schemas.Student)
async def get_student(student: _schemas.Student= _fastapi.Depends(_services.get_current_student)):
    return student

# Create alert
@app.post("/api/alerts", response_model=_schemas.Alert)
async def create_alert(alert: _schemas.AlertCreate, student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    return await _services.create_alert(student=student, db=db, alert=alert)

# Get Alert
@app.get("/api/alerts", response_model=list[_schemas.Alert])
async def get_all_alerts(student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    return await _services.get_all_alerts(student=student, db=db)

# Delete Alert
@app.delete("/api/alerts/{alert_id}", status_code=204)
async def delete_alert(alert_id: int, student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    await _services.delete_alert(alert_id, student, db)
    return {"message", "Successfully Deleted"}

# Update Alert
@app.put("/api/alerts/{alert_id}", status_code=200)
async def update_alert(alert_id: int, alert: _schemas.AlertCreate,student: _schemas.Student = _fastapi.Depends(_services.get_current_student),db: _orm.Session = _fastapi.Depends(_services.get_db)):
    await _services.update_alert(alert_id, alert, student, db)
    return {"message", "Successfully Updated"}

# Career data
@app.get("/api/careers", response_model=list[_schemas.Career])
async def get_career(student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    return await _services.get_career(student=student, db=db)

# Academic history
@app.get("/api/academic", response_model=_schemas.AcademicHistory)
async def get_history(student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    career = (await get_career(student=student, db=db))[0]
    return await _services.get_history(career=career, db=db)

# Subjects
@app.get("/api/subjects", response_model=list[_schemas.Subject])
async def get_subject(student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    history = await get_history(student=student, db=db)
    return await _services.get_subjects(history=history, db=db)

# Get subject by semester
@app.get("/api/subjects/{semester}", response_model=list[_schemas.Subject])
async def get_subject_by_semester(semester: str, student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    history = await get_history(student=student, db=db)
    return await _services.get_subject_by_semester(semester, history=history, db=db)

# Get semesters
@app.get("/api/semesters")
async def get_semesters(student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    history = await get_history(student=student, db=db)
    return (await _services.get_semesters(history=history, db=db))