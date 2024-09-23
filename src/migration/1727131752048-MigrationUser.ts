import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationUser1727131752048 implements MigrationInterface {
    name = 'MigrationUser1727131752048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" ADD "role" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "role"`);
    }

}
