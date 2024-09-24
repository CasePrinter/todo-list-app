import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationList1727145928657 implements MigrationInterface {
    name = 'MigrationList1727145928657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "list" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "status" character varying(20) NOT NULL DEFAULT 'OPEN', "todoId" integer, CONSTRAINT "PK_d8feafd203525d5f9c37b3ed3b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "list" ADD CONSTRAINT "FK_306a5345d8e6189c8114e4de667" FOREIGN KEY ("todoId") REFERENCES "todo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "list" DROP CONSTRAINT "FK_306a5345d8e6189c8114e4de667"`);
        await queryRunner.query(`DROP TABLE "list"`);
    }

}
