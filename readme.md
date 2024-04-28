# 1. Create a Repository with this Repo

1. Click the "Use this template" button at the top of this page.
2. Click the "Create a new repository"
3. Choose an appropriate name, and write a description of your site.
4. The site must be public.
5. Click "Create repository"

# 1. Update Your website.py

2. Replace the contents of `website.py` with your own website file.

You might want to make sure that you call `hide_debug_information` and other setup functions, if you want your site to be deployed without debug information.

```python
from drafter import *
# ...

hide_debug_information()
set_website_title("Your Website Title")
set_website_framed(False)

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
