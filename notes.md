== 1) Backend

- MODELS
  - store and represent our internal applications data
  - keep the database in sync
- SERIALIZERS (DRF ModelSerializer)
  - convert internal data to external transmittable data formats (JSON)
  - also coverts incoming data (JSON) to internal representation (python, model records) 
- VIEWS (DRF ViewSets)
  - handle requests and send out responses
  - work with serializers
- URLS (DRF DefaultRouter)
  - handle the routing of requests


== 2) Frontend

- ROUTER
  - handle our internal routing within our app
- PAGES
  - general content destinations
- COMPONENTS
  - presenting content, usually reflecting CRUD operations on resource
- API CALLS (axios)
  - handle getting and passing data to our backend API
- STYLING
  - make our app look AMAZING


== 3) Authentication

MODELS
  - add user
SERAILIZER
  - add a user serializer
VIEWS
  - filter data by user (optionally)
  - login/logout
URLS
  - add support for new views



