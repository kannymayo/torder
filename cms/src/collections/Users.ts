import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "company",
      type: "text",
    },
    {
      name: "outlet",
      type: "text",
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
