
import xlsxwriter

# Create a workbook and add a worksheet.
workbook = xlsxwriter.Workbook('Expenses01.xlsx')
worksheet = workbook.add_worksheet()

# Some data we want to write to the worksheet.
expenses = (
    ['Rent','Sok', 1000],
    ['Gas','Sovanara', 100],
    ['Food','John',300],
    ['Gym','Joe',50],
)

# Start from the first cell. Rows and columns are zero indexed.
row = 0
col = 0

# Iterate over the data and write it out row by row.
for item,supplier, cost in (expenses):
    worksheet.write(row, col, item)
    worksheet.write(row, col + 1, supplier)
    worksheet.write(row, col + 2, cost)
    row += 1

# Write a total using a formula.
worksheet.write(row, 0, 'Total')
worksheet.write(row, 1, '')
worksheet.write(row, 2, '=SUM(c1:c4)')

workbook.close()