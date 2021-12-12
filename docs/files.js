let alligator = `statisticaldata=>subroutine: Statistical data (CSV)|data:>:https://github.com/RGZM/alligator-mt-data/blob/master/v1/alligator_re_ca.csv
alligatorfile=>subroutine: Alligator File|data:>https://github.com/RGZM/alligator-mt-data
alligatorrdf=>subroutine: Alligator RDF|data:>https://rgzm.github.io/alligator/vocab/
cypher=>subroutine: Cypher Dataset|data:>https://github.com/RGZM/alligator-mt-data/blob/master/v1/alligator_re_results_cypther.cql
neo4jdb=>subroutine: Neo4J Database|data
images=>subroutine: Screenshot of Graph (PNG)|data
alligatorca=>inputoutput: Alligator-CA Coorespondance Analysis|tool:>https://github.com/RGZM/alligator-mt-data/blob/master/v2/romanempire.agt
alligator=>inputoutput: Alligator|toolwd:>https://github.com/RGZM/alligator
alligatortoamt=>inputoutput: Alligator To Amt|tool
amt=>inputoutput: Academic Meta Tool|toolwd:>http://academic-meta-tool.xyz
neo4jimporter=>inputoutput: Neo4J Importer|tool
neo4jguifrontend=>inputoutput: Neo4J GUI Frontend Screenshot Tool|tool

statisticaldata->alligatorca->alligatorfile(right)->alligator->alligatorrdf(right)->amt(right)->cypher->neo4jimporter(right)->neo4jdb(right)->neo4jguifrontend(right)->images`;

let oghamciic = `book=>subroutine: CIIC Book by Macalister|data:>https://www.wikidata.org/wiki/Q70256237
gcsv=>subroutine: CIIC Google Spreadsheet|data
csv=>subroutine: CIIC CSV|data
postgisogham=>subroutine: PostGIS Ogham Database|data
csv2=>subroutine: PostGIS CSV|data
images=>subroutine: Density Map Images (PNG)|data
booktocsv=>inputoutput: Manual digitization process|tool
gcsvtocsv=>inputoutput: Google Spreadsheet to CSV Export|tool
csvtopostgis=>inputoutput: CSV to POSTGIS Import (for Enrichment and Data Cleaning)|tool
postgistocsv=>inputoutput: POSTGIS to CSV Export|tool
rscript=>inputoutput: R Script|tool:>

book->booktocsv->gcsv(right)->gcsvtocsv(right)->csv(right)->csvtopostgis(right)->postgisogham(right)->postgistocsv(right)->csv2->rscript->images`;

let oghamcisp = `msaccess=>subroutine: CISP MS Access Database|data
sqlfile=>subroutine: SQL File|data
postgisdb=>subroutine: Ogham PostGIS Database|data
rdf4jdb=>subroutine: RDF4J SPARQL Repository|data
csv=>subroutine: Ogham CSV|data
ttl=>subroutine: Ogham TTL|data
sparqlresult=>subroutine: Ogham SPARQL Result|data
qgisvectorlayer=>subroutine: QGIS Vector Layer|data
images=>subroutine: Map Image (PNG)|data
bullzip=>inputoutput: Bullzip|tool
pythonscript=>inputoutput: Python Script|tool
csvtopostgis=>inputoutput: SQL POSTGIS Import|tool
postgistocsv=>inputoutput: POSTGIS to CSV Export|tool
rdf4jimport=>inputoutput: RDF4J Import|tool
sparqlunicornqgisplugin=>inputoutput: SPARQLing Unicorn QGIS Plugin|toolwd
qgisprintcomposer=>inputoutput: QGIS Print Composer|tool
rdf4jsparqlendpoint=>inputoutput: RDF4J SPARQL Endpoint|tool

msaccess->bullzip->sqlfile(left)->csvtopostgis(bottom)->postgisdb(right)->postgistocsv(right)->csv(right)->pythonscript(right)->ttl(right)->rdf4jimport->rdf4jdb(left)->rdf4jsparqlendpoint->sparqlresult(right)->sparqlunicornqgisplugin(right)->qgisvectorlayer(right)->qgisprintcomposer(right)->images`;

let julesverne = `csv=>subroutine: Jules_Vernes_Five_Weeks_in_a_balloon.txt|data:>https://www.gutenberg.org/cache/epub/3526/pg3526-images.html#link2HCH0001
recogitods=>subroutine: Recogito Dataset|data
geojson=>subroutine: GeoJSON|data
qgislayer=>subroutine: QGIS Vector Layer|data
qgismap=>subroutine: Map PDF|data
qgislayerenriched=>subroutine: Enriched QGIS Vector Layer|data
annotatedrecogitods=>subroutine: Annotated Recogito Dataset|data
recogito=>inputoutput: Recogito (Q74692524)|toolwd:>https://www.wikidata.org/entity/Q74692524
recogitoannotator=>inputoutput: Recogito Annotation tool|tool:>https://github.com/recogito/recogito-js
recogitoexporter=>inputoutput: Recogito Exporter|tool
qgistool=>inputoutput: QGIS 3.18 (Q1329181)|toolwd:>https://www.wikidata.org/entity/Q1329181
qgisprintcomposer=>inputoutput: QGIS 3.18 Print Composer|tool
sparqlunicorntool=>inputoutput: SPARQLing Unicorn QGIS Plugin 0.12 (Q71937877)|toolwd:>https://www.wikidata.org/entity/Q71937877

csv->recogito(right)->recogitods->recogitoannotator(left)->annotatedrecogitods->recogitoexporter(right)->geojson(right)->qgistool->qgislayer(left)->sparqlunicorntool->qgislayerenriched(right)->qgisprintcomposer(right)->qgismap`;