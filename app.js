//import { loadVGSCollect } from "@vgs/collect-js";

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


//const vgsForm = window.VGSCollect.create('tntkn4ugi9r', 'sandbox', () => {});

//const css = {
//  boxSizing: 'border-box',
//  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"',
//};



//vgsForm.field('#cardnumber', {
 // type: 'card-number',
 // name: 'card_number',
 // successColor: '#4F8A10',
 // errorColor: '#D8000C',
 // placeholder: 'Card number',
 // showCardIcon: true,
 // validations: ['required', 'validCardNumber'],
 // css: css,
//});

//vgsForm.field('#cvv', {
  type: 'card-security-code',
  name: 'card_cvc',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: 'CVC',
  maxLength: 3,
  validations: ['required', 'validCardSecurityCode'],
  css: css,
});

//vgsForm.field('#expdate', {
  type: 'card-expiration-date',
  name: 'card_exp',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: 'MM / YY',
  validations: ['required', 'validCardExpirationDate'],
  css: css,
});

//form.submit('/post', {}, (status, response) => {
   console.log(status, response);
 }, (error) => {
    console.log(error);
 });

// load script
// const collect = await loadVGSCollect({
// vaultId: 'tntkn4ugi9r',
//  environment: 'sandbox',
//  version: '2.9.0'
//}).catch((e) => {});

// https://www.verygoodsecurity.com/docs/vgs-collect/js/integration#form-state
//const form = collect.init(state => { console.log(state); });

//const form = VGSCollect.create('tntkn4ugi9r', 'sandbox',
//    function(state) {
      // get useful information from state
//    });

// https://www.verygoodsecurity.com/docs/vgs-collect/js/integration#create-and-setup-form-fields
//form.field({...});
//form.field({...});
//form.field({...});

// https://www.verygoodsecurity.com/docs/vgs-collect/js/integration#setup-form-submission
//form.submit(...);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
