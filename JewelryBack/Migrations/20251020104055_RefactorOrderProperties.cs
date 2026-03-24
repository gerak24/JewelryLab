using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JewelryBack.Migrations
{
    /// <inheritdoc />
    public partial class RefactorOrderProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Managers",
                keyColumn: "Id",
                keyValue: new Guid("4cacf957-6d90-4e70-8636-768242827db3"));

            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "Orders",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_Orders_Number",
                table: "Orders",
                column: "Number");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Orders_Number",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "Created",
                table: "Orders");

            migrationBuilder.InsertData(
                table: "Managers",
                columns: new[] { "Id", "Login", "PassHash" },
                values: new object[] { new Guid("4cacf957-6d90-4e70-8636-768242827db3"), "admin", "T7H5f9tkp2PRnt+5yLuWqcRaS+hd6VXB0mY8N7XDads=" });
        }
    }
}
