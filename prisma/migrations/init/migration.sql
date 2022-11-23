-- CreateTable
CREATE TABLE "Formadora" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Formadora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bitola" (
    "id" SERIAL NOT NULL,
    "tamanho" DOUBLE PRECISION NOT NULL,
    "formadoraId" INTEGER NOT NULL,

    CONSTRAINT "Bitola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passagem" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "lateralId" INTEGER,
    "superiorId" INTEGER,
    "inferiorId" INTEGER,
    "entreRolos" DOUBLE PRECISION NOT NULL,
    "bitolaId" INTEGER,

    CONSTRAINT "Passagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ferramenta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "fundo" TEXT,
    "frente" TEXT,

    CONSTRAINT "Ferramenta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Formadora_nome_key" ON "Formadora"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Ferramenta_nome_key" ON "Ferramenta"("nome");

-- AddForeignKey
ALTER TABLE "Bitola" ADD CONSTRAINT "Bitola_formadoraId_fkey" FOREIGN KEY ("formadoraId") REFERENCES "Formadora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passagem" ADD CONSTRAINT "Passagem_bitolaId_fkey" FOREIGN KEY ("bitolaId") REFERENCES "Bitola"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passagem" ADD CONSTRAINT "Passagem_inferiorId_fkey" FOREIGN KEY ("inferiorId") REFERENCES "Ferramenta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passagem" ADD CONSTRAINT "Passagem_lateralId_fkey" FOREIGN KEY ("lateralId") REFERENCES "Ferramenta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passagem" ADD CONSTRAINT "Passagem_superiorId_fkey" FOREIGN KEY ("superiorId") REFERENCES "Ferramenta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

