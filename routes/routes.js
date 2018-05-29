var multer = require('multer');
const path = require('path');
var upload = multer({ dest: __dirname + '/uploads' });

module.exports = function(app) {
  // passes in the file size message
  app.get('/', (req, res) => res.render('index', { fileSize: req.flash('fileSize') }));

  app.post('/api/upload', upload.single('file'), (req, res) => {
    // create a message to display to the user after the file is uploaded
    req.flash('fileSize', 'The file size is ' + req.file.size + ' bytes');
    res.redirect('/');
  });

  // 404 page
  app.get('*', (req, res) => res.json('Page not found!'));
};
