
rmdir D:\SpreadJS\ExcelIO\Client\chart\ /s /q

mkdir chart

cd chart

mkdir ooxml-models
mkdir ooxml-readers
mkdir ooxml-writers

cd ..

copy D:\XmlConverter\Tools\XmlReaderWriterGenerator\XSD\ooxml-models\*.ts D:\SpreadJS\ExcelIO\Client\chart\ooxml-models\
copy D:\XmlConverter\Tools\XmlReaderWriterGenerator\XSD\ooxml-readers\*.ts D:\SpreadJS\ExcelIO\Client\chart\ooxml-readers\
copy D:\XmlConverter\Tools\XmlReaderWriterGenerator\XSD\ooxml-writers\*.ts D:\SpreadJS\ExcelIO\Client\chart\ooxml-writers\


rem for /r D:\SpreadJS\ExcelIO\Client\chart\ooxml-models\ %%s in (*.ts) do (D:\SpreadJS\ExcelIO\Client\node_modules\.bin\tsc %%s)

rem for /r D:\SpreadJS\ExcelIO\Client\chart\ooxml-readers %%s in (*.ts) do (D:\SpreadJS\ExcelIO\Client\node_modules\.bin\tsc %%s)

rem for /r D:\SpreadJS\ExcelIO\Client\chart\ooxml-writers %%s in (*.ts) do (D:\SpreadJS\ExcelIO\Client\node_modules\.bin\tsc %%s)

rem call node mergeChartFile.js