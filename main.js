//from object to JSON 
Gson gson = new Gson();
gson.toJson(yourObject);

// from JSON to object 
yourObject o = gson.fromJson(JSONString,yourObject.class);