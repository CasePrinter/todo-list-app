import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationTodoPriority1727316907592 implements MigrationInterface {
    name = 'MigrationTodoPriority1727316907592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "project"."priority" IS NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "priority" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "project"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "list"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "list" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "todo"."priority" IS NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "priority" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "todo"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "status" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "status" SET DEFAULT 'OPEN'`);
        await queryRunner.query(`COMMENT ON COLUMN "todo"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "priority" SET DEFAULT 'MEDIUM'`);
        await queryRunner.query(`COMMENT ON COLUMN "todo"."priority" IS NULL`);
        await queryRunner.query(`ALTER TABLE "list" ALTER COLUMN "status" SET DEFAULT 'OPEN'`);
        await queryRunner.query(`COMMENT ON COLUMN "list"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "status" SET DEFAULT 'OPEN'`);
        await queryRunner.query(`COMMENT ON COLUMN "project"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "priority" SET DEFAULT 'MEDIUM'`);
        await queryRunner.query(`COMMENT ON COLUMN "project"."priority" IS NULL`);
    }

}
