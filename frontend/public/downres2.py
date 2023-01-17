from PIL import Image
import os

all_pngs = [f for f in os.listdir() if f.endswith(".png")]


for png in all_pngs:
        im = Image.open(png)
        rgb_im = im.convert('RGB')
        rgb_im.save(png.replace('.png','.jpg'))
        os.remove(png)




all_imgs= [f for f in os.listdir() if f.endswith(".png") or f.endswith(".jpg")]


os.mkdir("high_res")
os.mkdir("low_res")

for img in all_imgs:
    Image.open(img).save(os.path.join("high_res",img),quality=100)
    Image.open(img).save(os.path.join("low_res",img),quality=5)
    os.remove(img)
