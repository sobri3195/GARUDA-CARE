#!/usr/bin/env python3
import os
import re

def add_table_wrappers(file_path):
    """Add table-wrapper div around tables that don't have it"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if file already has table-wrapper
    if 'table-wrapper' in content:
        print(f"  Skipping {os.path.basename(file_path)} - already has table-wrapper")
        return False
    
    # Check if file has tables
    if 'className="table"' not in content:
        print(f"  Skipping {os.path.basename(file_path)} - no tables found")
        return False
    
    # Pattern to match tables without wrapper
    # Look for <table className="table"> that's not already wrapped
    pattern = r'(<div className="card-body">.*?)(<table className="table">)'
    
    # Count matches
    matches = re.findall(pattern, content, re.DOTALL)
    if not matches:
        print(f"  Skipping {os.path.basename(file_path)} - no unwrapped tables found")
        return False
    
    # Replace pattern to add wrapper
    def replacer(match):
        before = match.group(1)
        table = match.group(2)
        # Check if already has table-wrapper in the before context
        if 'table-wrapper' in before[-200:]:  # Check last 200 chars
            return match.group(0)
        return f'{before}<div className="table-wrapper">\n                {table}'
    
    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    # Now close the wrappers - find </table> followed by something that's not already </div>
    # This is tricky, so let's use a simpler approach
    # Find all </table> and check if next non-whitespace is </div>
    
    lines = new_content.split('\n')
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        new_lines.append(line)
        
        # If this line has </table>, check if we need to add closing wrapper
        if '</table>' in line:
            # Look ahead to see if next non-empty line has </div>
            j = i + 1
            while j < len(lines) and lines[j].strip() == '':
                new_lines.append(lines[j])
                j += 1
            
            if j < len(lines):
                next_line = lines[j]
                # If next line doesn't start with </div> for wrapper, add it
                if '</div>' not in next_line or 'table-wrapper' not in '\n'.join(lines[max(0,i-5):i+5]):
                    # Check if we added a wrapper for this table
                    # by looking back for table-wrapper
                    lookback = '\n'.join(lines[max(0, i-20):i])
                    if 'table-wrapper' in lookback and '</div>' not in next_line:
                        new_lines.append(' ' * (len(line) - len(line.lstrip())) + '</div>')
        
        i += 1
    
    new_content = '\n'.join(new_lines)
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"  ✓ Updated {os.path.basename(file_path)}")
    return True

def main():
    pages_dir = '/home/engine/project/src/pages'
    updated_count = 0
    
    print("Adding table-wrapper to pages...")
    for filename in sorted(os.listdir(pages_dir)):
        if filename.endswith('.js'):
            file_path = os.path.join(pages_dir, filename)
            if add_table_wrappers(file_path):
                updated_count += 1
    
    print(f"\n✓ Updated {updated_count} files")

if __name__ == '__main__':
    main()
