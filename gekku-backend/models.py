import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import datetime as _dt
import database as _database

class Student(_database.Base):
    __tablename__ = "students"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, index= True)
    email = _sql.Column(_sql.String, unique= True, index=True)
    password = _sql.Column(_sql.String)
    university = _sql.Column(_sql.String, index= True)

    careers = _orm.relationship("Career", back_populates="student")
    alerts = _orm.relationship("Alert", back_populates="student")

    def verify_password(self, password: str):
        if (password == self.password):
            return True
        else:
            return False
    
class Career(_database.Base):
    __tablename__ = "careers"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    code = _sql.Column(_sql.Integer, index=True)
    name = _sql.Column(_sql.String, index=True)
    credits = _sql.Column(_sql.Integer)
    student_id = _sql.Column(_sql.Integer, _sql.ForeignKey("students.id"))

    student = _orm.relationship("Student", back_populates="careers") # Relacion con student
    history = _orm.relationship("AcademicHistory", back_populates="career") # Relacion con academic_history

class AcademicHistory(_database.Base):
    __tablename__ = "academichistory"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    papa = _sql.Column(_sql.Float)
    pa = _sql.Column(_sql.Float)
    total_credits = _sql.Column(_sql.Integer)
    completed_credits = _sql.Column(_sql.Integer)
    career_id = _sql.Column(_sql.Integer, _sql.ForeignKey("careers.id"))

    career = _orm.relationship("Career", back_populates="history") # Relacion con careers
    subject = _orm.relationship("Subject", back_populates="academic_history") # Relacion con subject

class Subject(_database.Base):
    __tablename__ = "subjects"
    code = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, index= True)
    credits = _sql.Column(_sql.Integer, index= True)
    typology = _sql.Column(_sql.String, index= True)
    semester = _sql.Column(_sql.String, index= True)
    final_grade = _sql.Column(_sql.Float)
    history_id = _sql.Column(_sql.Integer,  _sql.ForeignKey("academichistory.id"))

    academic_history = _orm.relationship("AcademicHistory", back_populates="subject") # Relacion con academic_history

class Alert(_database.Base):
    __tablename__ = "alerts"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    title = _sql.Column(_sql.String, index=True)
    topic = _sql.Column(_sql.String, index=True)
    note = _sql.Column(_sql.String)
    date = _sql.Column(_sql.DateTime, index=True)
    student_id = _sql.Column(_sql.Integer, _sql.ForeignKey("students.id"))

    student = _orm.relationship("Student", back_populates="alerts") # Relacion con student