# Fortnite-API

Uses the https://fortniteapi.io/ API

## Examples

The `player_stats` function returns the following data

```json
{
  "result": true,
  "name": "AccountNameHere",
  "account": {
    "season": 32,
    "level": 12,
    "process_pct": 35
  },
  "accountLevelHistory": [
    {
      "season": 23,
      "level": 96,
      "process_pct": 57
    },
    {
      "season": 24,
      "level": 13,
      "process_pct": 91
    },
    {
      "season": 32,
      "level": 12,
      "process_pct": 35
    }
  ],
  "global_stats": {
    "duo": {
      "placetop1": 1,
      "kd": 3.57,
      "winrate": 0.05,
      "placetop3": 0,
      "placetop5": 10,
      "placetop6": 0,
      "placetop10": 0,
      "placetop12": 14,
      "placetop25": 0,
      "kills": 75,
      "matchesplayed": 22,
      "minutesplayed": 277,
      "score": 7882,
      "playersoutlived": 1647,
      "lastmodified": 1730776990
    },
    "trio": {
      "placetop1": 7,
      "kd": 3.07,
      "winrate": 0.14,
      "placetop3": 15,
      "placetop5": 0,
      "placetop6": 18,
      "placetop10": 0,
      "placetop12": 0,
      "placetop25": 0,
      "kills": 132,
      "matchesplayed": 50,
      "minutesplayed": 543,
      "score": 15128,
      "playersoutlived": 3267,
      "lastmodified": 1730786042
    },
    "squad": {
      "placetop1": 24,
      "kd": 3.3,
      "winrate": 0.28,
      "placetop3": 49,
      "placetop5": 0,
      "placetop6": 64,
      "placetop10": 0,
      "placetop12": 0,
      "placetop25": 0,
      "kills": 208,
      "matchesplayed": 87,
      "minutesplayed": 1159,
      "score": 35016,
      "playersoutlived": 6293,
      "lastmodified": 1730784609
    },
    "solo": {
      "placetop1": 0,
      "kd": 2,
      "winrate": 0,
      "placetop3": 0,
      "placetop5": 0,
      "placetop6": 0,
      "placetop10": 0,
      "placetop12": 0,
      "placetop25": 2,
      "kills": 4,
      "matchesplayed": 2,
      "minutesplayed": 22,
      "score": 540,
      "playersoutlived": 156,
      "lastmodified": 1730681242
    }
  },
  "per_input": {
    "keyboardmouse": {
      "duo": {
        "placetop1": 1,
        "kd": 3.57,
        "winrate": 0.05,
        "placetop3": 0,
        "placetop5": 10,
        "placetop6": 0,
        "placetop10": 0,
        "placetop12": 14,
        "placetop25": 0,
        "kills": 75,
        "matchesplayed": 22,
        "minutesplayed": 277,
        "score": 7882,
        "playersoutlived": 1647,
        "lastmodified": 1730776990
      },
      "trio": {
        "placetop1": 7,
        "kd": 3.12,
        "winrate": 0.14,
        "placetop3": 15,
        "placetop5": 0,
        "placetop6": 18,
        "placetop10": 0,
        "placetop12": 0,
        "placetop25": 0,
        "kills": 131,
        "matchesplayed": 49,
        "minutesplayed": 530,
        "score": 14783,
        "playersoutlived": 3191,
        "lastmodified": 1730786042
      },
      "squad": {
        "placetop1": 14,
        "kd": 3.23,
        "winrate": 0.23,
        "placetop3": 31,
        "placetop5": 0,
        "placetop6": 44,
        "placetop10": 0,
        "placetop12": 0,
        "placetop25": 0,
        "kills": 155,
        "matchesplayed": 62,
        "minutesplayed": 808,
        "score": 23730,
        "playersoutlived": 4353,
        "lastmodified": 1730784609
      },
      "solo": {
        "placetop1": 0,
        "kd": 2,
        "winrate": 0,
        "placetop3": 0,
        "placetop5": 0,
        "placetop6": 0,
        "placetop10": 0,
        "placetop12": 0,
        "placetop25": 2,
        "kills": 4,
        "matchesplayed": 2,
        "minutesplayed": 22,
        "score": 540,
        "playersoutlived": 156,
        "lastmodified": 1730681242
      }
    },
    "gamepad": {
      "squad": {
        "placetop1": 10,
        "kd": 3.53,
        "winrate": 0.4,
        "placetop3": 18,
        "placetop5": 0,
        "placetop6": 20,
        "placetop10": 0,
        "placetop12": 0,
        "placetop25": 0,
        "kills": 53,
        "matchesplayed": 25,
        "minutesplayed": 351,
        "score": 11286,
        "playersoutlived": 1940,
        "lastmodified": 1674362647
      },
      "trio": {
        "placetop1": 0,
        "kd": 1,
        "winrate": 0,
        "placetop3": 0,
        "placetop5": 0,
        "placetop6": 0,
        "placetop10": 0,
        "placetop12": 0,
        "placetop25": 0,
        "kills": 1,
        "matchesplayed": 1,
        "minutesplayed": 13,
        "score": 345,
        "playersoutlived": 76,
        "lastmodified": 1674336291
      }
    }
  },
  "seasons_available": [
    32
  ]
}
```
