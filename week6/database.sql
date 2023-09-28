CREATE TABLE "boneka" (
  "bonekaId" integer PRIMARY KEY,
  "kategoriId" integer,
  "nama" varchar(255),
  "deskripsi" text,
  "harga" integer
);

CREATE TABLE "kategori" (
  "kategoriId" integer PRIMARY KEY,
  "nama" varchar(255)
);

ALTER TABLE "boneka" ADD FOREIGN KEY ("kategoriId") REFERENCES "kategori" ("kategoriId");
