import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationAddress1727113110925 implements MigrationInterface {
    name = 'MigrationAddress1727113110925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user_info"."address" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user_info"."address" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ALTER COLUMN "address" SET NOT NULL`);
    }

}
