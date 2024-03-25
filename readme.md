# 1. Fork this Repository

1. Fork this repository to your GitHub account.

# 1. Update Your website.py

2. Replace the contents of `website.py` with your own website file.

You might want to make sure that you call `hide_debug_information`, if you want your site to be deployed without debug information.

```python
from drafter import *
# ...

hid_debug_information()

# ...
start_server()
```

# 2. Deploy your website

You can deploy this website via GitHub Pages.

3. Go to the repository settings.
4. Scroll down to the GitHub Pages section.
5. Select the source branch (usually `main` or `master`).
6. Click on the save button.
7. Wait for the deployment to finish.

You can now access your website at `https://<username>.github.io/<repository-name>`.