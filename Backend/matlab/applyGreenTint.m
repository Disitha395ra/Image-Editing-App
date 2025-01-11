function outputPath = applyGreenTint(imagePath, outputFolder)
    % Read the image
    img = imread(imagePath);

    % Extract color channels
    redChannel = img(:, :, 1);
    blueChannel = img(:, :, 3);

    % Set Red and Blue channels to 0
    img(:, :, 1) = redChannel * 0.3; % Optional: Reduce red slightly
    img(:, :, 3) = blueChannel * 0.3;

    % Enhance Green channel
    img(:, :, 2) = img(:, :, 2) * 1.5;

    % Generate output path
    [~, name, ext] = fileparts(imagePath);
    outputPath = fullfile(outputFolder, [name, '_green', ext]);

    % Save the tinted image
    imwrite(img, outputPath);
end
