# expressJsProductionTemplate

Compilation of a few standard practices for deploying ExpressJs app to production.
1. Rather than this relative style of adding to your routes, use absolute with dirname.
- var indexRouter = require('./routes/index');                             
- var indexRouter = require(path.join(__dirname,'routes','index'));

2. Handle exceptions/Error properly
- Make a global error handler and throw errors from all the other middlewares or functions so that this error handler sends the appropriate response.
- Handle uncaught exception by process and get alert if that happens.  Exiting on process Exception is encouraged.  
- Domains & 'process uncaught exception', both are discouraged by expressjs.com in their What Not To Do.
- Use promises or try/catch in case of async or sync codes for error handling.

3. Use gzip compression
- This is achieved by using compression module, with default params other than the filter function made custom. 

4. Don’t use synchronous functions at all. 

5. Do logging correctly.

6. Set NODE_ENV to “production”.
- Setting NODE_ENV to “production” makes Express:
- Cache view templates.
- Cache CSS files generated from CSS extensions.
- Generate less verbose error messages.
- Tests indicate that just doing this can improve app performance by a factor of three!

7. Structure of code folders itself.
8. Follow security best practices by Expressjs.com by using Helmet.






Sources:
1. https://expressjs.com/en/advanced/best-practice-performance.html
2. https://evanhahn.com/express-dot-static-deep-dive/
3. https://strongloop.com/strongblog/robust-node-applications-error-handling/
4. https://www.joyent.com/node-js/production/design/errors
5. https://www.dynatrace.com/news/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/
6. https://github.com/expressjs/compression



