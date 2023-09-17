from typing import List, Optional
from datetime import date
from sqlalchemy import String, Date, ARRAY, Text, Integer
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass  

class Article(Base):
    __tablename__ = "articles"
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(Text)
    date: Mapped[Date] = mapped_column(Date)
    overview: Mapped[str] = mapped_column(Text)
    url: Mapped[str] = mapped_column(Text)
    image_url: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    primary_kw: Mapped[str] = mapped_column(Text)
    keywords: Mapped[Optional[List[str]]] = mapped_column(ARRAY(String), nullable=True)
    rating: Mapped[int] = mapped_column(Integer)

    def __repr__(self) -> str:
        return f"Article(id={self.id!r}, title={self.title!r})"    