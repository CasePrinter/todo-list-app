import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationEmail1727271575095 implements MigrationInterface {
    name = 'MigrationEmail1727271575095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
