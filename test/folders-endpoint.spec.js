'use strict';
const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeFoldersArray } = require('./folders.fixtures');

describe('Folders Endpoints', function () {
  let db;
  before(() => {
    db = knex({ client: 'pg', connection: process.env.TEST_DATABASE_URL });
  });
  before(() => db.raw('TRUNCATE folders, notes RESTART IDENTITY CASCADE'));
  afterEach(() => db.raw('TRUNCATE folders, notes RESTART IDENTITY CASCADE'));
  after(() => db.destroy());

  context('Given Folders has data', () => {
    const testFolders = makeFoldersArray();
    beforeEach('insert folders', () => {
      return db.into('folders').insert(testFolders);
    });
    it('responds with 200 and all folders', () => {
      return supertest(app).get('/folders').expect(200, testFolders);
    });
  });

  describe('GET /folders/:folder_id', () => {
    context('Given no Folder', () => {
      it('responds with 400', () => {
        const folderId = 234;
        return supertest(app)
          .get(`/folders/${folderId}`)
          .expect(404, { error: { message: 'Folder does not exist' } });
      });
    });
    context('Given Folder exists', () => {
      const testFolders = makeFoldersArray();

      beforeEach('insert folders', () => {
        return db.into('folders').insert(testFolders);
      });

      it('Gives 200 and specified folder', () => {
        const folderId = 3;
        const expectedFolder = testFolders[folderId - 1];
        return supertest(app)
          .get(`/folders/${folderId}`)
          .expect(200, expectedFolder);
      });
    });
  });
});
