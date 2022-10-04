import os
import json


project_json = []

for projectname in sorted(os.listdir("media/projects")):
    project_dir = os.path.join("media/projects", projectname)

    project_json.append(
        {
            "title": projectname,
            "display": [
                os.path.join(project_dir, "display/low_res", img)
                for img in sorted(os.listdir(os.path.join(project_dir, "display/low_res")))
            ],
            "main_images": [
                {
                    "low_res_img": os.path.join(project_dir, "images/low_res", img_low),
                    "high_res_img": os.path.join(project_dir, "images/high_res", img_high),
                    "html_desc": open(os.path.join(project_dir, "text", desc)).read(),
                }
                for img_low, img_high, desc in zip(
                    sorted(os.listdir(os.path.join(project_dir, "images/low_res"))),
                    sorted(os.listdir(os.path.join(project_dir, "images/high_res"))),
                    sorted(os.listdir(os.path.join(project_dir, "text"))),
                )
            ],
        }
    )


print(json.dumps(project_json))
