function outputPath = applyYellowTint(imagePath, outputFolder)
    % Read the image
    img = imread(imagePath);

    % Extract color channels
    blueChannel = img(:, :, 3);

    % Set Blue channel to 0
    img(:, :, 3) = blueChannel * 0.3;

    % Enhance Red and Green channels
    img(:, :, 1) = img(:, :, 1) * 1.3;
    img(:, :, 2) = img(:, :, 2) * 1.3;

    % Generate output path
    [~, name, ext] = fileparts(imagePath);
    outputPath = fullfile(outputFolder, [name, '_yellow', ext]);

    % Save the tinted image
    imwrite(img, outputPath);
end
