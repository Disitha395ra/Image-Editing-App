function outputPath = applyGrayTint(imagePath, outputFolder)
    % Read the image
    img = imread(imagePath);

    % Convert image to grayscale
    grayImg = rgb2gray(img);

    % Convert grayscale back to RGB format for consistent handling
    grayImgRGB = cat(3, grayImg, grayImg, grayImg);

    % Generate output path
    [~, name, ext] = fileparts(imagePath);
    outputPath = fullfile(outputFolder, [name, '_gray', ext]);

    % Save the tinted image
    imwrite(grayImgRGB, outputPath);
end
