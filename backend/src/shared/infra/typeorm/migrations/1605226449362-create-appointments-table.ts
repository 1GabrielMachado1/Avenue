import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export class createAppointmentsTable1605226449362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const userTableColumns: TableColumnOptions[] = [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
            },
            {
                name: 'avaliable-date',
                type: 'timestamp',
                isNullable: false
            },
            {
                name: 'venue_id',
                type: 'uuid',
                isNullable: false
            },
            {
                name: 'booking-date',
                type: 'timestamp',
                isNullable: false
            },
            {
                name: 'lessee_id',
                type: 'uuid',
                isNullable: false
            },
            {
                name: 'price',
                type: 'decimal',
                precision: 2,
                isNullable: false
            },
            {
                name: 'created_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()'
            },
            {
                name: 'updated_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()'
            }

        ];

        const userTable: Table = new Table({
            name: 'appointments',
            columns: userTableColumns,
            foreignKeys: [
                {
                    name: 'venue_id_fk',
                    columnNames: ['venue_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'venues',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'lessee_id_fk',
                    columnNames: ['lessee_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        });

        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(userTable);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }

}
