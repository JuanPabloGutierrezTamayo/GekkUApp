import fastapi as _fastapi
import fastapi.security as _security
import sqlalchemy.orm as _orm
import database as _database
import services as _services, schemas as _schemas
from typing import List

app = _fastapi.FastAPI()

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

# Alert data
@app.get("/api/alerts", response_model=list[_schemas.Alert])
async def get_alert(student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    return await _services.get_alert(student=student, db=db)

# Career data
@app.get("/api/careers", response_model=list[_schemas.Career])
async def get_career(student: _schemas.Student = _fastapi.Depends(_services.get_current_student), db: _orm.Session=_fastapi.Depends(_services.get_db)):
    return await _services.get_career(student=student, db=db)