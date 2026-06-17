import fs from "fs";
import path from "path";

const bagsPath = path.resolve("public/bags");
const outputPath = path.resolve("src/data/bags.json");

const result = [];

function readFolder(folderPath, publicPath = "/bags") {
	const items = fs.readdirSync(folderPath);

	items.forEach((item) => {
		const itemPath = path.join(folderPath, item);
		const stat = fs.statSync(itemPath);

		if (stat.isDirectory()) {
			const images = fs
				.readdirSync(itemPath)
				.filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
				.sort((a, b) => {
					return parseInt(a) - parseInt(b);
				})
				.map(file => `${publicPath}/${item}/${file}`);

			if (images.length > 0) {
				result.push({
					id: item,
					title: "Bags - Cavacos",
					type: "cordas",
					description: "",
					tags: [],
					images
				});
			} else {
				readFolder(itemPath, `${publicPath}/${item}`);
			}
		}
	});
}

readFolder(bagsPath);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

console.log("bags.json gerado com sucesso!");