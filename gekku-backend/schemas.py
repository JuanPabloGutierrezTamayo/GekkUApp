import pydantic as _pydantic
import datetime as _dt

# Schemas for student
class _StudentBase(_pydantic.BaseModel):
    name: str
    email: str
    university: str

class StudentCreate(_StudentBase):
    hashed_password: str
    class Config:
        orm_mode = True

class Student(_StudentBase):
    id: int
    class Config:
        orm_mode = True

# Schemas for Career
class _CareerBase(_pydantic.BaseModel):
    code: int
    name: str
    credits: int

class CareerCreate(_CareerBase):
    pass

class Career(_CareerBase):
    id:int
    class Config:
        orm_mode = True


# Schemas for Academic History
class _AcademicHistoryBase(_pydantic.BaseModel):
    total_credits: int

class AcademicHistoryCreate(_AcademicHistoryBase):
    pass

class AcademicHistory(_AcademicHistoryBase):
    id: int
    papa: float
    pa: float
    completed_credits: int
    class Config:
        orm_mode = True

# Schemas for Subject
class _SubjectBase(_pydantic.BaseModel):
    code: int
    name: str
    credits: int
    typology: str
    semester: str

class SubjectCreate(_SubjectBase):
    pass

class Subject(_SubjectBase):
    final_grade: float
    class Config:
        orm_mode = True

# Schemas for Alerts
class _AlertBase(_pydantic.BaseModel):
    title: str
    topic: str
    note: str
    date: _dt.datetime

class AlertCreate(_AlertBase):
    pass

class Alert(_AlertBase):
    id: int
    class Config:
        orm_mode = True