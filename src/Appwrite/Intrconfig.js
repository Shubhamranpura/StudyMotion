import { Client, Databases, ID, Storage } from "appwrite";
import envvariable from "./appwriteconfig";

export class service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(envvariable.Endpointurl)
      .setProject(envvariable.Projectid)
    this.database = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }
  async uplaodfile(file) {
    const response = await this.bucket.createFile(envvariable.Bucketid, ID.unique(),
      file
    );
    return response
  }

  async addcourse(data) {
    const fileupload = await Promise.all([
      this.uplaodfile(data.qualiProof),
      this.uplaodfile(data.workexp),
      this.uplaodfile(data.identityproof),
      this.uplaodfile(data.passPort),
    ])
    console.log(fileupload)
    console.log(data)
   
     return  await this.database.createDocument(envvariable.Databaseid, envvariable.Collectionid, ID.unique(), {
        Instructorname: data.username,
        instructorTagname: data.Tagname,
        currentemployment: data.curEmployment,
        QualificationProof: fileupload[0].$id,
        workexperienceProof: fileupload[1].$id,
        identityProof: fileupload[2].$id,
        PassportProof: fileupload[3].$id
      })
    
  }
}