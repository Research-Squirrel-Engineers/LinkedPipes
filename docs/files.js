let alligator=`statisticaldata=>subroutine: Statistical data (CSV):>:https://github.com/RGZM/alligator-mt-data/blob/master/v1/alligator_re_ca.csv
alligatorfile=>subroutine: Alligator File:>https://github.com/RGZM/alligator-mt-data
alligatorrdf=>subroutine: Alligator RDF:>https://rgzm.github.io/alligator/vocab/
cypher=>subroutine: Cypher Dataset:>https://github.com/RGZM/alligator-mt-data/blob/master/v1/alligator_re_results_cypther.cql
neo4jdb=>subroutine: Neo4J Database
images=>subroutine: Screenshot of Graph (PNG)
alligatorca=>inputoutput: Alligator-CA Coorespondance Analysis:>https://github.com/RGZM/alligator-mt-data/blob/master/v2/romanempire.agt
alligator=>inputoutput: Alligator :>https://github.com/RGZM/alligator
alligatortoamt=>inputoutput: Alligator To Amt
amt=>inputoutput: Academic Meta Tool :>http://academic-meta-tool.xyz
neo4jimporter=>inputoutput: Neo4J Importer
neo4jguifrontend=>inputoutput: Neo4J GUI Frontend Screenshot Tool

statisticaldata->alligatorca->alligatorfile(right)->alligator->alligatorrdf(right)->amt(right)->cypher->neo4jimporter(right)->neo4jdb(right)->neo4jguifrontend(right)->images`;

let oghamciic=`book=>subroutine: CIIC Book by Macalister:>https://www.wikidata.org/wiki/Q70256237
gcsv=>subroutine: CIIC Google Spreadsheet
csv=>subroutine: CIIC CSV
postgisogham=>subroutine: PostGIS Ogham Database
csv2=>subroutine: PostGIS CSV
images=>subroutine: Density Map Images (PNG)
booktocsv=>inputoutput: Manual digitization process
gcsvtocsv=>inputoutput: Google Spreadsheet to CSV Export
csvtopostgis=>inputoutput: CSV to POSTGIS Import (for Enrichment and Data Cleaning)
postgistocsv=>inputoutput: POSTGIS to CSV Export
rscript=>inputoutput: R Script:>

book->booktocsv->gcsv(right)->gcsvtocsv(right)->csv(right)->csvtopostgis(right)->postgisogham(right)->postgistocsv(right)->csv2->rscript->images`;

let oghamcisp=`msaccess=>subroutine: CISP MS Access Database
sqlfile=>subroutine: SQL File
postgisdb=>subroutine: Ogham PostGIS Database
rdf4jdb=>subroutine: RDF4J SPARQL Repository
csv=>subroutine: Ogham CSV
ttl=>subroutine: Ogham TTL
sparqlresult=>subroutine: Ogham SPARQL Result
qgisvectorlayer=>subroutine: QGIS Vector Layer
images=>subroutine: Map Image (PNG)
bullzip=>inputoutput: Bullzip
pythonscript=>inputoutput: Python Script
csvtopostgis=>inputoutput: SQL POSTGIS Import
postgistocsv=>inputoutput: POSTGIS to CSV Export
rdf4jimport=>inputoutput: RDF4J Import
sparqlunicornqgisplugin=>inputoutput: SPARQLing Unicorn QGIS Plugin
qgisprintcomposer=>inputoutput: QGIS Print Composer
rdf4jsparqlendpoint=>inputoutput: RDF4J SPARQL Endpoint

msaccess->bullzip->sqlfile(left)->csvtopostgis(bottom)->postgisdb(right)->postgistocsv(right)->csv(right)->pythonscript(right)->ttl(right)->rdf4jimport->rdf4jdb(left)->rdf4jsparqlendpoint->sparqlresult(right)->sparqlunicornqgisplugin(right)->qgisvectorlayer(right)->qgisprintcomposer(right)->images`;

let julesverne=`csv=>subroutine: Jules_Vernes_Five_Weeks_in_a_balloon.txt|data:>https://www.gutenberg.org/cache/epub/3526/pg3526-images.html#link2HCH0001
recogitods=>subroutine: Recogito Dataset|data
geojson=>subroutine: GeoJSON|data
qgislayer=>subroutine: QGIS Vector Layer|data
qgismap=>subroutine: Map PDF|data
qgislayerenriched=>subroutine: Enriched QGIS Vector Layer|data
annotatedrecogitods=>subroutine: Annotated Recogito Dataset|data
recogito=>inputoutput: Recogito (Q74692524)|tool:>https://www.wikidata.org/entity/Q74692524
recogitoannotator=>inputoutput: Recogito Annotation tool|tool:>https://github.com/recogito/recogito-js
recogitoexporter=>inputoutput: Recogito Exporter|tool
qgistool=>inputoutput: QGIS 3.18 (Q1329181)|tool:>https://www.wikidata.org/entity/Q1329181
qgisprintcomposer=>inputoutput: QGIS 3.18 Print Composer|tool
sparqlunicorntool=>inputoutput: SPARQLing Unicorn QGIS Plugin 0.12 (Q71937877)|tool:>https://www.wikidata.org/entity/Q71937877

csv->recogito(right)->recogitods->recogitoannotator(left)->annotatedrecogitods->recogitoexporter(right)->geojson(right)->qgistool->qgislayer(left)->sparqlunicorntool->qgislayerenriched(right)->qgisprintcomposer(right)->qgismap`;