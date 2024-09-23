import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationProjectInicial1727130102224 implements MigrationInterface {
    name = 'MigrationProjectInicial1727130102224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "todoId" integer`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_e64d91c5c1b9856ee4db89d74cd" FOREIGN KEY ("todoId") REFERENCES "todo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_e64d91c5c1b9856ee4db89d74cd"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "todoId"`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
