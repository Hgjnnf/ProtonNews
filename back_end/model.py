from typing import List, Optional
from datetime import date
from sqlalchemy import String, Date, ARRAY, Text, Integer
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class Keyword(Base):
    __tablename__ = "keywords"
    id: Mapped[int] = mapped_column(primary_key=True)
    keyword: Mapped[str] = mapped_column(String(50))
    articles: Mapped[List[str]] = mapped_column(ARRAY(String))

    def __repr__(self) -> str:
        return f"Keyword(id={self.id!r}, keyword={self.keyword!r}, articles={self.articles!r})"    

class Article(Base):
    __tablename__ = "articles"
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String(150))
    date: Mapped[Date] = mapped_column(Date)
    overview: Mapped[str] = mapped_column(Text)
    url: Mapped[str] = mapped_column(String(100))
    image_url: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)

    keywords: Mapped[List[str]] = mapped_column(ARRAY(String))
    rating: Mapped[int] = mapped_column(Integer)

    def __repr__(self) -> str:
        return f"Article(id={self.id!r}, title={self.title!r})"    