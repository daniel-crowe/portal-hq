import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "pZ4uecV2QmMik2KVUENP9v",  // ID of a project you are using
      token: "e1WpDbJumGUFC4X1ojEKrdAfZYpN4R4O7WqdbClDiAaB4uTdCMg9ehOkFIQUE73XMtuvE583woPn2DM6ZQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})