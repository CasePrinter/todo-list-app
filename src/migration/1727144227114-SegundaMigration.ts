import {MigrationInterface, QueryRunner} from "typeorm";

export class SegundaMigration1727144227114 implements MigrationInterface {
    name = 'SegundaMigration1727144227114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "deadlineDate" TIMESTAMP NOT NULL DEFAULT now(), "priority" character varying(20) NOT NULL DEFAULT 'MEDIUM', "status" character varying(20) NOT NULL DEFAULT 'OPEN', "todoId" integer, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "deadlineDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "priority" character varying(20) NOT NULL DEFAULT 'MEDIUM'`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "status" character varying(20) NOT NULL DEFAULT 'OPEN'`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "role" character varying(20) DEFAULT 'USER'`);
        await queryRunner.query(`ALTER TABLE "user_info" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user_info"."address" IS NULL`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_e64d91c5c1b9856ee4db89d74cd" FOREIGN KEY ("todoId") REFERENCES "todo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_e64d91c5c1b9856ee4db89d74cd"`);
        await queryRunner.query(`COMMENT ON COLUMN "user_info"."address" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ALTER COLUMN "address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "deadlineDate"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
