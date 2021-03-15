# Desarrollar una template serverless yml que nos permita definir dos funciones lambas.
# Estas lambdas van a ser desplegadas en varios ambientes por lo que necesitamos que el provider
# stage sea leido como opcion del CLI por ej sls deploy --stage='prod', default 'dev'
# La primera llamada http-file-processor se expone con un api Gtw, a través del recurso POST /upload
# con cors activado, esta se encargará de hacer un PutObject sobre un bucket S3.
# Ayuda: definir accesos necesarios para la lambda:
# - Effect: Allow
#      Action:
#        - s3:PutObject
#      Resource: [arn bucket]
# La otra funcion debe ser triggeriada por un evento s3 sobre el bucket anterior.
# Ayuda: no necesitamos definir el bucket s3 con cloudformation, solo basta con indicar el trigger.
# El nombre del bucket debe depender del stage y ser obtenido de la seccion custom:
# Ej closures-demo-${self:provider.stage}
# El nombre del bucket tambien debe ser accedido como variable de entorno en process.env.BUCKET.
# Ademas se debe desplegar sobre las versiones de serverless framework ">=1.1.0 <2.0.0"
# runtime es a eleccion de la implementacion del handler