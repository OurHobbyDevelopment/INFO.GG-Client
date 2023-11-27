interface AccountType {
  data: {
    account_level: number;
    card: {
      id: string;
      large: string;
      small: string;
      wide: string;
    };
    last_update: string;
    last_update_raw: number;
    name: string;
    puuid: string;
    region: string;
    tag: string;
  };
}

interface GameScoreType {
  status: number;
  name: string;
  tag: string;
  data: ScoreType[];
}

interface ScoreType {
  meta: {
    map: {
      name: string;
    };
    mode: string;
    region: string;
    season: {
      short: string;
    };
    started_at: string;
  };
  stats: {
    assists: number;
    character: {
      name: string;
    };
    deaths: number;
    kills: number;
    score: number;
    team: string;
    tier: number;
  };
}
