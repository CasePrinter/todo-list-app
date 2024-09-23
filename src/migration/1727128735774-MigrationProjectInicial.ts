import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationProjectInicial1727128735774 implements MigrationInterface {
    name = 'MigrationProjectInicial1727128735774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "deadlineDate" TIMESTAMP NOT NULL DEFAULT now(), "priority" character varying(20) NOT NULL DEFAULT 'MEDIUM', "status" character varying(20) NOT NULL DEFAULT 'OPEN', CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "status" character varying(20) NOT NULL DEFAULT 'OPEN'`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
