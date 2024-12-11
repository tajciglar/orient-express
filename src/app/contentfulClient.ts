import { createClient } from "contentful";

export const client = createClient({
  space: "zestrite5hf6", 
  accessToken: "LFeXVVgZL2Sprz9-6kctk46JCBBdFbPpSBTxBLgjfQk", 
});

export const fetchWeeklyMenu = async () => {
  const response = await client.getEntries({ content_type: "dnevniMeni" });
  return response.items.map((item) => {
    console.log(item)
  
    return {
      dan: item.fields.dan, 
      datum: item.fields.datum || new Date().toISOString(), 
      jedi: item.fields.jedi, 
    };
  });
};