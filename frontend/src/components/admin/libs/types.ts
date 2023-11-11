export type RegisterEvent = {
  id: string;
  title: string;

  cover_image: {
    lastModified: number;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  };
  short_description: string;
  content: string;
  voting_startdate: string;
  voting_enddate: string;
  created_at: string;
  error?: string;
  items?: [];
};
