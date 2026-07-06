window.BENCHMARK_DATA = {
  "lastUpdate": 1783331306925,
  "repoUrl": "https://github.com/ahbarnett/treeweave",
  "entries": {
    "treeweave batch eval": [
      {
        "commit": {
          "author": {
            "name": "Alex Barnett",
            "username": "ahbarnett",
            "email": "abarnett@flatironinstitute.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3053fbff9ca289afc6d1f86ce327d4b644a95418",
          "message": "Merge branch 'DiamonDinoia:main' into main",
          "timestamp": "2026-07-02T22:02:13Z",
          "url": "https://github.com/ahbarnett/treeweave/commit/3053fbff9ca289afc6d1f86ce327d4b644a95418"
        },
        "date": 1783331305087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "eval/1d/runge/f64",
            "value": 0.000712988375,
            "unit": "s/batch",
            "extra": "MdAPE=0.00716308750666568; batch=65536 pts/call"
          },
          {
            "name": "eval/1d/runge-deep/f64",
            "value": 0.00124814155555556,
            "unit": "s/batch",
            "extra": "MdAPE=0.00853680795650774; batch=65536 pts/call"
          },
          {
            "name": "eval/1d/runge-deep/f32",
            "value": 0.000596739777777778,
            "unit": "s/batch",
            "extra": "MdAPE=0.00425831894290935; batch=65536 pts/call"
          },
          {
            "name": "eval/2d/bump/f64",
            "value": 0.001987629625,
            "unit": "s/batch",
            "extra": "MdAPE=0.00545699909249199; batch=65536 pts/call"
          },
          {
            "name": "eval/3d/smooth/f64",
            "value": 0.00278316077777778,
            "unit": "s/batch",
            "extra": "MdAPE=0.00251883393060082; batch=65536 pts/call"
          },
          {
            "name": "eval/2d/bump-deep/f64",
            "value": 0.0068057705,
            "unit": "s/batch",
            "extra": "MdAPE=0.0117752237733574; batch=65536 pts/call"
          },
          {
            "name": "eval/3d/smooth-deep/f64",
            "value": 0.016441717625,
            "unit": "s/batch",
            "extra": "MdAPE=0.00231708184829209; batch=65536 pts/call"
          },
          {
            "name": "eval/2d->3d/vector/f64",
            "value": 0.001671732125,
            "unit": "s/batch",
            "extra": "MdAPE=0.00354804467496386; batch=65536 pts/call"
          }
        ]
      }
    ]
  }
}