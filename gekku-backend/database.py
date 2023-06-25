import sqlalchemy as _sql
import sqlalchemy.ext.declarative as _declarative
import sqlalchemy.orm as _orm
import passlib.hash as _hash

DATABASE_URL = "sqlite:///./database.db"
engine = _sql.create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = _orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = _declarative.declarative_base()

"""
class Student(Base):
    __tablename__ = "students"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, index= True)
    email = _sql.Column(_sql.String, unique= True, index=True)
    hashed_password = _sql.Column(_sql.String)
    university = _sql.Column(_sql.String, index= True)

    carrers = _orm.relationship("Career", back_populates="student")

    def verify_password(self, password: str):
        return _hash.bcrypt.verify(password, self.hashed_password)
    
class Career(Base):
    __tablename__ = "careers"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    code = _sql.Column(_sql.Integer, index=True)
    name = _sql.Column(_sql.String, index=True)
    credits = _sql.Column(_sql.Integer)
    student_id = _sql.Column(_sql.Integer, _sql.ForeignKey("students.id"))

    student = _orm.relationship("Student", back_populates="careers") # Relacion con student
    history = _orm.relationship("AcademicHistory", back_populates="career") # Relacion con academic_history

class AcademicHistory(Base):
    __tablename__ = "academichistory"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    papa = _sql.Column(_sql.Float)
    pa = _sql.Column(_sql.Float)
    total_credits = _sql.Column(_sql.JSON)
    completed_credits = _sql.Column(_sql.JSON)
    career_id = _sql.Column(_sql.Integer, _sql.ForeignKey("careers.id"))

    career = _orm.relationship("Career", back_populates="history") # Relacion con careers
    subject = _orm.relationship("Subject", back_populates="academic_history") # Relacion con subject

class Subject(Base):
    __tablename__ = "subjects"
    code = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, index= True)
    credits = _sql.Column(_sql.Integer, index= True)
    typology = _sql.Column(_sql.String, index= True)
    semester = _sql.Column(_sql.String, index= True)
    final_grade = _sql.Column(_sql.Float)
    history_id = _sql.Column(_sql.Integer,  _sql.ForeignKey("academichistory.id"))

    academic_history = _orm.relationship("AcademicHistory", back_populates="subject") # Relacion con academic_history

Base.metadata.create_all(engine)
"""