function outputPath = applyBlueTint(imagePath, outputFolder)
    % Read the image
    img = imread(imagePath);

    % Extract color channels
    redChannel = img(:, :, 1);
    greenChannel = img(:, :, 2);

    % Set Red and Green channels to 0
    img(:, :, 1) = redChannel * 0.3;
    img(:, :, 2) = greenChannel * 0.3;

    % Enhance Blue channel
    img(:, :, 3) = img(:, :, 3) * 1.5;

    % Generate output path
    [~, name, ext] = fileparts(imagePath);
    outputPath = fullfile(outputFolder, [name, '_blue', ext]);

    % Save the tinted image
    imwrite(img, outputPath);
end
