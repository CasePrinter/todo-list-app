import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationTodo1727116977063 implements MigrationInterface {
    name = 'MigrationTodo1727116977063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "deadlineDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "priority" character varying(20) NOT NULL DEFAULT 'MEDIUM'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "deadlineDate"`);
    }

}
