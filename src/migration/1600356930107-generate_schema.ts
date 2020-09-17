import {MigrationInterface, QueryRunner} from "typeorm";

export class generateSchema1600356930107 implements MigrationInterface {
    name = 'generateSchema1600356930107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweets` DROP FOREIGN KEY `FK_8039099215c037f10c11b0cf228`");
        await queryRunner.query("ALTER TABLE `tweets` CHANGE `userId` `userId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `tweets` ADD CONSTRAINT `FK_8039099215c037f10c11b0cf228` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweets` DROP FOREIGN KEY `FK_8039099215c037f10c11b0cf228`");
        await queryRunner.query("ALTER TABLE `tweets` CHANGE `userId` `userId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `tweets` ADD CONSTRAINT `FK_8039099215c037f10c11b0cf228` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
