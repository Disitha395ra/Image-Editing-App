function outputPath = applyRedTint(inputPath, outputPath)
    % Read the input image
    img = imread(inputPath);

    % Apply the red tint (keep only the red channel)
    img(:, :, 2:3) = 0;

    % Save the processed image
    imwrite(img, outputPath);

    % Return the output path
end
