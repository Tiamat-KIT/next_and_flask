from flask import Flask
from flask_cors import CORS

import torch
import torchvision
import torchvision.transforms as transforms
from torch_sample import CNN

def main():

    # モデル読み込み
    model = CNN()
    model.load_state_dict(torch.load("model.pth"))

    # transform定義
    transform = transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))])

    # 検証データ
    test_data_with_teacher_labels = torchvision.datasets.CIFAR10(root='./data', train=False, download=True, transform=transform)
    test_data_loader = torch.utils.data.DataLoader(test_data_with_teacher_labels, batch_size=4, shuffle=False, num_workers=2)

    # クラスの中身を設定
    class_names = ('plane', 'car', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck')

    # クラスごとの検証結果
    class_corrent = list(0. for i in range(10))
    class_total = list(0.for i in range(10))

    result_data = []

    with torch.no_grad(): # 勾配の計算をしない
        for data in test_data_loader:
            # 検証データと教師ラベルデータを取得
            test_data, teacher_labels = data
            # 検証データをモデルに渡し予測
            results = model(test_data)
            # 予測結果を取得
            _, predicted = torch.max(results, 1) 
            c = (predicted == teacher_labels).squeeze()
            for i in range(4):
                label = teacher_labels[i]
                class_corrent[label] += c[i].item()
                class_total[label] += 1
    # 結果表示
    for i in range(10):
        store_result = f"{class_names[i]} クラスの正解率：{100 * class_corrent[i] / class_total[i]}"
        print(store_result)
        result_data.append(store_result_text)

    return result_data


# https://www.alpha.co.jp/blog/202207_01


app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return main()

if __name__ == "__main__":
    app.run(debug=True)