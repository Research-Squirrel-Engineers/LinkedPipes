let julesverne = `csv=>subroutine: Jules_Vernes_Five_Weeks_in_a_balloon.txt|data:>https://www.gutenberg.org/cache/epub/3526/pg3526-images.html#link2HCH0001[blank]
recogitods=>subroutine: Recogito Dataset|data
geojson=>subroutine: GeoJSON|data
qgislayer=>subroutine: QGIS Vector Layer|data
qgismap=>subroutine: Map PDF|data
qgislayerenriched=>subroutine: Enriched QGIS Vector Layer|data
annotatedrecogitods=>subroutine: Annotated Recogito Dataset|data

recogito=>inputoutput: Recogito (Q74692524)|toolwd:>https://www.wikidata.org/entity/Q74692524[blank]
recogitoannotator=>inputoutput: Recogito Annotation tool|tool:>https://github.com/recogito/recogito-js[blank]
recogitoexporter=>inputoutput: Recogito Exporter|tool
qgistool=>inputoutput: QGIS 3.18 (Q1329181)|toolwd:>https://www.wikidata.org/entity/Q1329181[blank]
qgisprintcomposer=>inputoutput: QGIS 3.18 Print Composer|tool
sparqlunicorntool=>inputoutput: SPARQLing Unicorn QGIS Plugin 0.12 (Q71937877)|toolwd:>https://www.wikidata.org/entity/Q71937877[blank]

csv->recogito(right)->recogitods->recogitoannotator(left)->annotatedrecogitods->recogitoexporter(right)->geojson(right)->qgistool->qgislayer(left)->sparqlunicorntool->qgislayerenriched(right)->qgisprintcomposer(right)->qgismap`;

let cuneiform_3d = `
claytablet=>subroutine: Clay tablet|datand
3dscan=>subroutine: Cuneiform Tablet 3D Scan|data
cleaned_3dscan=>subroutine: Cleaned 3D Scan|data
align_clean_3dscan=>subroutine: Aligned and Cleaned 3D Scan|data
3dscan_rendering=>subroutine: Rendering from 3D Scan|data
3dscan_rendering_anno=>subroutine: Annotation on 3D Rendering|data
anno_crop=>subroutine: Cropped annotation|data

3dscanning=>inputoutput: 3D Scanning Software (ATOS) |tool:>https://www.atos-core.com/index.php[blank]
gigameshtool=>inputoutput: Gigamesh Clean|toolwd:>https://www.wikidata.org/entity/Q55896111[blank]
gigameshtool2=>inputoutput: Gigamesh Alignment|toolwd:>https://www.wikidata.org/entity/Q55896111[blank]
gigameshtool3=>inputoutput: Gigamesh Rendering Export|toolwd:>https://www.wikidata.org/entity/Q55896111[blank]
annotorious=>inputoutput: Annotorious (Q110088633)|toolwd:>https://www.wikidata.org/entity/Q110088633[blank]
imagemagick=>inputoutput: Imagemagick Crop and Annotate (Q1047199)|toolwd:>https://www.wikidata.org/entity/Q1047199[blank]

claytablet->3dscanning(right)->3dscan(right)->gigameshtool->cleaned_3dscan(left)->gigameshtool2->align_clean_3dscan(right)->gigameshtool3(right)->3dscan_rendering(right)->annotorious(right)->3dscan_rendering_anno(right)->imagemagick(right)->anno_crop`

let alligator = `statisticaldata=>subroutine: Statistical data (CSV)|data:>https://github.com/RGZM/alligator-mt-data/blob/master/v1/alligator_re_ca.csv[blank]
alligatorfile=>subroutine: Alligator File|data:>https://github.com/RGZM/alligator-mt-data/blob/master/v2/romanempire.agt[blank]
alligatorrdf=>subroutine: Alligator RDF|data:>https://github.com/RGZM/alligator-mt-data/blob/master/v1/alligator_re_results_rdf.ttl[blank]
cypher=>subroutine: Cypher Dataset|data:>https://github.com/RGZM/alligator-mt-data/blob/master/v1/alligator_re_results_cypther.cql[blank]
neo4jdb=>subroutine: Neo4J Database|data
images=>subroutine: Screenshot of Graph (PNG)|data

alligatorca=>inputoutput: Alligator-CA Tool|tool:>https://github.com/RGZM/alligator-ca[blank]
alligator=>inputoutput: Alligator (Q74004218)|toolwd:>https://www.wikidata.org/entity/Q74004218[blank]
alligatortoamt=>inputoutput: Alligator to Amt transformer|tool
amt=>inputoutput: Academic Meta Tool (Q74003194)|toolwd:>https://www.wikidata.org/entity/Q74003194[blank]
neo4jimporter=>inputoutput: Neo4J Importer|tool
neo4jguifrontend=>inputoutput: Neo4J GUI Frontend Screenshot Tool|tool

statisticaldata->alligatorca->alligatorfile(right)->alligator->alligatorrdf(right)->amt(right)->cypher->neo4jimporter(right)->neo4jdb(right)->neo4jguifrontend(right)->images`;

let oghamciic = `book=>subroutine: CIIC Book by Macalister|datand:>https://www.wikidata.org/wiki/Q70256237[blank]
gcsv=>subroutine: CIIC Google Spreadsheet|data
csv=>subroutine: CIIC CSV|data
postgisogham=>subroutine: PostGIS Ogham Database|data
csv2=>subroutine: PostGIS CSV|data:>https://github.com/ogi-ogham/oghamaps/tree/names_occuring_atleast_3times/analysis/data[blank]
images=>subroutine: Density Map Images (PNG)|data:>https://github.com/ogi-ogham/oghamaps/blob/names_occuring_atleast_3times/analysis/figures/densitymap.jpg[blank]

booktocsv=>inputoutput: Manual digitization process|tool
gcsvtocsv=>inputoutput: Google Spreadsheet to CSV Export|tool
csvtopostgis=>inputoutput: CSV to POSTGIS Import (for Enrichment and Data Cleaning)|tool
postgistocsv=>inputoutput: POSTGIS to CSV Export|tool
rscript=>inputoutput: R Script|tool:>https://github.com/ogi-ogham/oghamaps/[blank]

book->booktocsv->gcsv(right)->gcsvtocsv(right)->csv(right)->csvtopostgis(right)->postgisogham(right)->postgistocsv(right)->csv2->rscript->images`;

let oghamcisp = `msaccess=>subroutine: CISP MS Access Database|data
sqlfile=>subroutine: SQL File|data
postgisdb=>subroutine: Ogham PostGIS Database|data
rdf4jdb=>subroutine: RDF4J SPARQL Repository|data:>https://digits.mainzed.org/ogham/[blank]
csv=>subroutine: Ogham CSV|data
ttl=>subroutine: Ogham TTL|data
sparqlresult=>subroutine: Ogham SPARQL Result|data
qgisvectorlayer=>subroutine: QGIS Vector Layer|data
images=>subroutine: Map Image (PNG)|data:>https://commons.wikimedia.org/wiki/File:Squirrel_Sites.png[blank]

bullzip=>inputoutput: Bullzip|tool
pythonscript=>inputoutput: Python Script|tool
csvtopostgis=>inputoutput: SQL POSTGIS Import|tool
postgistocsv=>inputoutput: POSTGIS to CSV Export|tool
rdf4jimport=>inputoutput: RDF4J Import|tool
sparqlunicornqgisplugin=>inputoutput: SPARQLing Unicorn QGIS Plugin (Q74005133)|toolwd:>https://www.wikidata.org/entity/Q74005133[blank]
qgisprintcomposer=>inputoutput: QGIS Print Composer|tool
rdf4jsparqlendpoint=>inputoutput: RDF4J SPARQL Endpoint|tool

msaccess->bullzip->sqlfile(left)->csvtopostgis(bottom)->postgisdb(right)->postgistocsv(right)->csv(right)->pythonscript(right)->ttl(right)->rdf4jimport->rdf4jdb(left)->rdf4jsparqlendpoint->sparqlresult(right)->sparqlunicornqgisplugin(right)->qgisvectorlayer(right)->qgisprintcomposer(right)->images`;

let samianresearch = `samianresearch=>subroutine: Samian Research Database|data:>https://www.rgzm.de/samian[blank]
postgisdb=>subroutine: Samian Research PostGIS|data
views=>subroutine: Samian Research PostGIS Views|data
csvs=>subroutine: Samian Research CSVs|data:>https://www1.rgzm.de/ips/lod/[blank]
lod=>subroutine: Linked Open Samian Ware|data:>https://github.com/RGZM/samian-lod/tree/main/data[blank]
rdf4jdb=>subroutine: RDF4J LOSW Repository|data
wikidata=>subroutine: WikiProject Linked Open Samian Ware|data:>https://www.wikidata.org/wiki/Wikidata:WikiProject_Linked_Open_Samian_Ware[blank]

userinput=>inputoutput: User Community Input|tool
cfscripts=>inputoutput: ColdFusion Scripts|tool
postgistocsv=>inputoutput: POSTGIS to CSV Export|tool
python=>inputoutput: Python Script|tool:>https://github.com/RGZM/samian-lod/blob/main/py/_run_py3.py[blank]
ttltordf4j=>inputoutput: RDF4J Import JAVA Maven Tool|tool
qs=>inputoutput: QuickStatements 2 (Q29032512)|toolwd:>https://www.wikidata.org/wiki/Q29032512[blank]

cond=>condition: Wikidata or own triplestore|cond

samianresearch->userinput->postgisdb(right)->cfscripts(right)->views(right)->postgistocsv(right)->csvs(right)->python(right)->lod->ttltordf4j
lod->cond(no)->ttltordf4j->rdf4jdb
lod->cond(yes)->qs->wikidata`;